/**
 * this env extends stencil-env version ed971cf5c2db61e66e1076ff9550c117ba1502d9.
 * to inspect its config @see https://bit.cloud/teambit/web-components/stencil?version=ed971cf5c2db61e66e1076ff9550c117ba1502d9
 * */
import { Compiler } from '@teambit/compiler';
import { SvelteEnv } from '@bitdev/svelte.svelte-env';
import { SveltePreview } from '@bitdev/svelte.dev-services.preview.svelte-preview';
// import { HtmlPreview } from '@teambit/html.preview.html-preview';
import { EnvHandler } from '@teambit/envs';
import {
  SvelteTypescriptMultiCompiler,
  SvelteTypescriptCompilationTask,
} from '@bitdev/svelte.dev-services.compiler.svelte-typescript-multi-compiler';
import {
  resolveTypes
} from '@teambit/typescript.typescript-compiler';
import { ESLintLinter, EslintTask } from '@teambit/defender.eslint-linter';
import { JestTester, JestTask } from '@teambit/defender.jest-tester';
import { PrettierFormatter } from '@teambit/defender.prettier-formatter';
import { Pipeline } from "@teambit/builder";
import { Tester } from '@teambit/tester';
import { Preview } from '@teambit/preview';
import { SvelteWebpackTransformer } from '@bitdev/svelte.dev-services.bundler.svelte-webpack-transformer';
import hostDependencies from './preview/host-dependencies';
// import { webpackTransformer } from './config/webpack.config';


export class MySvelteEnv extends SvelteEnv {

  /* a shorthand name for the env */
  name = 'my-svelte-env';

  /* the compiler to use during development */
  compiler(): EnvHandler<Compiler> {
    return SvelteTypescriptMultiCompiler.from({
      svelteCompilerOptions: {
        /**
         * uncomment the following line to control the version of svelte 
         * used by the compiler - import "svelte" from your node_modules and use it here
         */
        // svelte, 
      },
      typescriptCompilerOptions: {
        tsconfig: require.resolve('./config/tsconfig.json'),
        types: [...resolveTypes(__dirname, ['./types'])]
      }
    });
  }

  /* the test runner to use during development */
  tester(): EnvHandler<Tester> {
    /**
     * @see https://bit.dev/reference/jest/using-jest
     * */
    return JestTester.from({
      config: require.resolve('./config/jest/jest.config'),
    });
  }

  /* the linter to use during development */
  linter() {
    /**
     * @see https://bit.dev/reference/eslint/using-eslint
     * */
    return ESLintLinter.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      configPath: require.resolve('./config/eslintrc.js'),
      pluginsPath: __dirname,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    });
  }

  /**
   * the formatter to use during development
   * (source files are not formatted as part of the components' build)
   * */
  formatter() {
    /**
     * @see https://bit.dev/reference/prettier/using-prettier
     * */
    return PrettierFormatter.from({
      configPath: require.resolve('./config/prettier.config.js'),
    });
  }

  /**
   * generates the component previews during development and during build
   */
  preview(): EnvHandler<Preview> {
    /**
     * @see https://bit.dev/docs/react-env/component-previews
     */
    return SveltePreview.from({
      docsTemplate: require.resolve('./preview/docs'),
      mounter: require.resolve('./preview/mounter'),
      hostDependencies
    });
  }

  /**
   * a set of processes to be performed before a component is snapped, during its build phase
   * @see https://bit.dev/docs/react-env/build-pipelines
   */
  build() {
    return Pipeline.from([
      SvelteTypescriptCompilationTask.from({
        svelteCompilerOptions: {
          /**
           * uncomment the following line to control the version of svelte 
           * used by the compiler - import "svelte" from your node_modules and use it here
           */
          // svelte, 
        },
        typescriptCompilerOptions: {
          tsconfig: require.resolve('./config/tsconfig.json'),
          types: [...resolveTypes(__dirname, ['./types'])]
        }
      }),
      EslintTask.from({
        tsconfig: require.resolve("./config/tsconfig.json"),
        configPath: require.resolve("./config/eslintrc.js"),
        // resolve all plugins from the react environment.
        pluginsPath: __dirname,
        extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
      }),
      JestTask.from({
        config: require.resolve("./config/jest/jest.config"),
        jest: require.resolve("jest"),
      }),
    ]);
  }
}

export default new MySvelteEnv();
    