#!/usr/bin/env node
import validList from "./http-validation.js";
import chalk from "chalk";
import getFile from "./index.js";
import fs from "fs";

const path = process.argv;

async function printList(validation = "", result, indentfier = "") {
  if (validation) {
    console.log(chalk.black.bgGreen(`Lista Validada ${indentfier}:`));
    const test = await validList(result);
    const ntest = JSON.stringify(test);
    console.log(chalk.magenta(ntest));
  } else {
    result = JSON.stringify(result);
    console.log(
      chalk.black.bgGreen(`Lista de links do arquivo ${indentfier}:`)
    );
    console.log(chalk.magenta(`${result}`));
  }
}

async function textProcess(path) {
  try {
    const validation = path[3] === "--valid";
    const realPath = path[2];
    if (fs.lstatSync(realPath).isFile()) {
      const result = await getFile(path[2]);
      printList(validation, result);
    } else if (fs.lstatSync(realPath).isDirectory) {
      const filesArray = await fs.promises.readdir(realPath);
      filesArray.forEach(async (filesName) => {
        const list = await getFile(`${realPath}/${filesName}`);
        printList(validation, list, filesName);
      });
    }
  } catch (error) {
    console.log(chalk.green(`O codigo de erro foi ${error.code}`));
    if (error.code === "ENOENT") {
      console.log(
        chalk.red("Não existe algum diretorio ou arquivo com esse nome")
      );
    }
  }
}

textProcess(path);
