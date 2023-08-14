/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const { markdown } = require('danger');
const { dangerReport } = require('lintervention');

async function lintervention() {
  const report = await dangerReport({ baseBranch: 'main' });
  markdown(report);
}

lintervention();
