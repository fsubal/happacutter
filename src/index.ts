import ts from "typescript/lib/tsserverlibrary";

const factory: ts.server.PluginModuleFactory = () => ({
  create({ languageService: parent }) {
    return {
      ...parent,

      getSemanticDiagnostics(fileName: string) {
        const original = parent.getSemanticDiagnostics(fileName);
        return [
          ...original,
          original[0]
            ? {
                category: ts.DiagnosticCategory.Error,
                code: 0,
                file: original[0].file,
                start: 1,
                length: 5,
                messageText: "always shown error",
              }
            : undefined!,
        ].filter(Boolean);
      },

      dispose() {},
    };
  },
});

export = factory;
