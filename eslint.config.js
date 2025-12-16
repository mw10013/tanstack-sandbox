//  @ts-check

import { globalIgnores } from 'eslint/config'
import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  globalIgnores([
    '.output/**',
    'refs/**',
    'src/components/ui/**',
    'src/routeTree.gen.ts',
  ]),
  ...tanstackConfig,
  // Override parserOptions to disable 'project' from tanstackConfig and enable 'projectService'
  // with allowDefaultProject for *.js files, allowing config files to be linted without errors
  {
    languageOptions: {
      parserOptions: {
        project: false,
        projectService: {
          allowDefaultProject: ['*.js'],
        },
      },
    },
  },
]
