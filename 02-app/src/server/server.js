import "source-map-support/register";
import {blegh} from "shared/test";
import _ from "lodash";

blegh();
const arr = [1,2,3,4];
console.log(_.filter(arr, a => a < 5));
console.log("from server");
