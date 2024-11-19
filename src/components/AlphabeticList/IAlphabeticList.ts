export interface IAlphabeticList<T>{
    items: T[],
    orderingRule: (a: T, b: T) => number,
    renderItem: (item: T) => React.ReactNode
}