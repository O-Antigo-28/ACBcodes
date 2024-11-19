import { IAlphabeticList } from "../AlphabeticList/IAlphabeticList"

export interface IAlphabeticListWithChapters<T> extends IAlphabeticList<T>{ 
    property: keyof T
}