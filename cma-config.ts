import pc from 'picocolors';
import {DEPENDENCIES} from '../../../../src/dependencies';
import {
  Framework,
  FrameworkTypes,
  FrameworkVariants,
} from '../../../../src/interfaces';
import {SharedTemplates} from '../../../../src/generatedTemplatesList';

const CONFIG: Framework = {
  type: FrameworkTypes.CLIENT,
  name: 'react',
  display: 'React',
  color: pc.cyan,
  templates: [SharedTemplates.Client, SharedTemplates.ClientAssets],
  customPackageJSONFields: {
    scripts: {
      start: 'vite',
      build: 'vite build',
      serve: 'vite preview',
    },
    dependencies: {
      mirotone: '3',
    },
    devDependencies: {
      vite: '3.0.3',
    },
  },
  variants: [
    {
      name: FrameworkVariants.js,
      display: 'JavaScript',
      color: pc.yellow,
      deps: {
        dependencies: {
          ...DEPENDENCIES.react,
          ...DEPENDENCIES.reactDom,
        },

        devDependencies: {
          ...DEPENDENCIES.vitePluginReactRefresh,
        },
      },
    },
    {
      name: FrameworkVariants.ts,
      display: 'TypeScript',
      deps: {
        dependencies: {
          ...DEPENDENCIES.react,
          ...DEPENDENCIES.reactDom,
        },
        devDependencies: {
          ...DEPENDENCIES.miroWebSdkTypes,
          ...DEPENDENCIES.reactTypes,
          ...DEPENDENCIES.reactDomTypes,
          ...DEPENDENCIES.vitePluginReactRefresh,
          ...DEPENDENCIES.typescript,
          ...DEPENDENCIES.nodeTypes,
        },
      },
      color: pc.blue,
    },
  ],
};
export default CONFIG;
