import { Command } from "commander";

const program = new Command();

program
  .name("tmdb_cli_tool")
  .description("CLI command to get shitty movies!")
  .version("0.0.1")
  .option("--type").argument("<string>")
  .parse();

export default program;