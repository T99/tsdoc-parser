/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:23 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import { TSDocMethod } from "../tsdoc-method";

export interface TSDocMethodOwner {

	getMethods(): TSDocMethod[];
	
}
