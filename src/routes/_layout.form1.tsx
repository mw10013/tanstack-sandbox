'use client'
import { createFileRoute } from '@tanstack/react-router'
import { mergeForm, useForm, useStore } from '@tanstack/react-form'
import { createServerFn } from '@tanstack/react-start'
import {
  ServerValidateError,
  createServerValidate,
  formOptions,
  getFormData,
  useTransform,
} from '@tanstack/react-form-start'
import { setResponseStatus } from '@tanstack/react-start/server'
import { AlertCircleIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export const formOpts = formOptions({
  defaultValues: {
    firstName: '',
    age: 0,
  },
})

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.age < 12) {
      return 'Server validation: You must be at least 12 to sign up'
    }
  },
})

export const handleForm = createServerFn({
  method: 'POST',
})
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) {
      throw new Error('Invalid form data')
    }
    return data
  })
  .handler(async (ctx) => {
    try {
      // Delay for 5 seconds
      // await new Promise((resolve) => setTimeout(resolve, 5000))

      const validatedData = await serverValidate(ctx.data)
      console.log('validatedData', validatedData)
    } catch (e) {
      if (e instanceof ServerValidateError) {
        return e.response
      }
      console.error(e)
      setResponseStatus(500)
      return 'There was an internal error'
    }
    return 'Form has validated successfully'
  })

export const getFormDataFromServer = createServerFn().handler(getFormData)

export const Route = createFileRoute('/_layout/form1')({
  component: RouteComponent,
  loader: async () => ({
    state: await getFormDataFromServer(),
  }),
})

function RouteComponent() {
  const { state } = Route.useLoaderData()

  const form = useForm({
    ...formOpts,
    transform: useTransform((baseForm) => mergeForm(baseForm, state), [state]),
  })

  const formErrors = useStore(form.store, (formState) => formState.errors)

  return (
    <div className="p-6">
      <form
        id="age-check-form"
        action={handleForm.url}
        method="post"
        encType={'multipart/form-data'}
      >
        <Card className="w-full sm:max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Age Check</CardTitle>
            <CardDescription className="grid gap-2">
              We need to check your age before you can proceed.
              {/* <pre>
              {JSON.stringify(
                { action: handleForm.url, formErrors, state },
                null,
                2,
              )}
            </pre> */}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              {formErrors.length > 0 && (
                <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertTitle>Unable to verify your age.</AlertTitle>
                  <AlertDescription>
                    <p>Please verify your age and try again.</p>
                    <ul className="list-inside list-disc text-sm">
                      {formErrors.map((error) => (
                        <li key={error as never as string}>{error}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
              <form.Field
                name="age"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Age</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(e.target.valueAsNumber)
                        }
                        aria-invalid={isInvalid}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
            </FieldGroup>
          </CardContent>
          <CardFooter>
            {/* 
              Note: Using form.Subscribe with isSubmitting here won't work as intended
              because HTML form submissions (via action/method) bypass TanStack Form's
              handleSubmit(), so isSubmitting never updates. For isSubmitting to change,
              we must use programmatic submission with form.handleSubmit().
            */}
            <form.Subscribe
              selector={(formState) => [
                formState.canSubmit,
                formState.isSubmitting,
              ]}
            >
              {([canSubmit, isSubmitting]) => (
                <>
                  <Field orientation="horizontal">
                    <Button
                      type="button"
                      variant="outline"
                      disabled={!canSubmit}
                      onClick={() => form.reset()}
                    >
                      Reset
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? '...' : 'Submit'}
                    </Button>
                  </Field>
                </>
              )}
            </form.Subscribe>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}
