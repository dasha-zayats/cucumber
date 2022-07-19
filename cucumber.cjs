// const common = [
//   "./features/*.feature",
//   "--require-module ts-node/register",
//   "--require ./src/step-definitions/*.steps.ts",
//   "--publish-quiet",
//   "--parallel 2"
// ].join(" ")

// module.exports = {
//  default: common
// }
export default {
  parallel: 2,
  format: ['html:cucumber-report.html'],
  path: ['features/*.feature'],
  publishQuiet: true,
  require: ['./src/step-definitions/login.steps.ts'],
  requireModule: ['ts-node/register'],
}