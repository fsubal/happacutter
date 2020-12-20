import ts from "typescript/lib/tsserverlibrary";

const factory: ts.server.PluginModuleFactory = () => ({
  create({ languageService: parent }) {
    return {
      ...parent,

      getSemanticDiagnostics(fileName: string) {
        return parent.getSemanticDiagnostics(fileName);
      },

      dispose() {},
    };
  },
});

export = factory;
