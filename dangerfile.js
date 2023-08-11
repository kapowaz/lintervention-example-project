/* eslint-disable import/no-extraneous-dependencies */
import { markdown } from 'danger';
import { dangerReport } from 'lintervention';

async function lintervention() {
  const report = await dangerReport();
  markdown(report);
}

lintervention();
