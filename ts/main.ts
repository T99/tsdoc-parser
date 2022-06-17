/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:53 PM -- June 11th, 2019.
 * Project: @t99/tsdoc-parser
 * 
 * @t99/tsdoc-parser - A JSDoc/TSDoc parser that allows easy generation of
 * documentation from JSDoc/TSDoc inline comments.
 * Copyright (C) 2021 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v<version>
 * @since v<version>
 */

// export { ClassName } from "./class-location";

import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import fs from "fs/promises";

export async function main(): Promise<void> {
	
	const fileName: string = "test-file.ts";
	const fileContent: string = (await fs.readFile(fileName)).toString();
	
	const tsFile: ts.SourceFile = ts.createSourceFile(
		fileName,
		fileContent,
		{ languageVersion: ScriptTarget.ESNext }
	);
	
	ts.forEachChild(tsFile, (node: ts.Node) => {
		
		node.
		
	});
	
}

main();
