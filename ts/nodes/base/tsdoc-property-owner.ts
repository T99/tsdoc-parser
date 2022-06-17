/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:51 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import { TSDocProperty } from "../tsdoc-property";

export interface TSDocPropertyOwner {
	
	getProperties(): TSDocProperty[];
	
}
