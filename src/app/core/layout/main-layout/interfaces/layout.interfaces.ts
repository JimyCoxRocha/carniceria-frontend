import { Category } from "src/app/core/interfaces";
import { ExpansionPanelInterface } from "../components/expansion-panel/expansion-panel.component";

export interface categoryFormat{
    category: Category,
    subItem: ExpansionPanelInterface[]
  }