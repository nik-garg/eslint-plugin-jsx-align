module.exports = {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce tabular alignment of JSX assignments",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "whitespace",
    schema: [], // no options
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const attributes = node.attributes;

        if (attributes.length < 2) {
          return;
        }

        const equalSigns = attributes.map((attr) => {
          if (attr.type === 'JSXAttribute' && attr.value) {
            const sourceCode = context.getSourceCode();
            const equalSign = sourceCode.getTokenBefore(attr.value);
            return equalSign;
          }
          return null;
        });

        const maxEqualSignColumn = Math.max(
          ...equalSigns.map((equalSign) => equalSign && equalSign.loc.start.column)
        );

        equalSigns.forEach((equalSign) => {
          if (equalSign && equalSign.loc.start.column !== maxEqualSignColumn) {
            context.report({
              node: equalSign,
              message: "JSX assignments should be aligned",
              fix(fixer) {
                const spacesToAdd = maxEqualSignColumn - equalSign.loc.start.column;
                return fixer.insertTextBefore(equalSign, ' '.repeat(spacesToAdd));
              },
            });
          }
        });
      },
    };
  },
};
