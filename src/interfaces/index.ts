export enum Variant{
    NORMAL = 'NORMAL',
    HEART = 'HEART',
    STAR = 'STAR'
}

export enum Color{
    RED = 'RED',
    PINK = 'PINK',
    GREEN = 'GREEN',
    BLUE = 'BLUE',
    YELLOW = 'YELLOW',
    PURPLE = 'PURPLE',
    WHITE = 'WHITE',
    ORANGE = 'ORANGE',
    BLACK = 'BLACK'
}

export enum SortInput {
    ID = 'ID',
    NAME = 'NAME',
    PRICE = 'PRICE',
    AVAILABLE_SINCE = 'AVAILABLE_SINCE',
    COLOR = 'COLOR'
}

export interface Ballon{
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description?: string;
    color?: Color;
    variant?: Variant;
    availableSince?: string;
}

export interface StrictBallon{
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    color: Color;
    variant: Variant;
    availableSince: string;
}

export interface BallonQueryResp{
    balloon: StrictBallon
}

export interface PageInfo {
    hasNextPage: boolean;
    endCursor: string;
    hasPreviousPage: boolean;
    startCursor: string;
}

export interface BallonEdge{
    node: Ballon;
    cursor?: string;
}

export interface BallonsQueryData {
    pageInfo: PageInfo;
    edges: BallonEdge[];
}

export interface BallonsQueryResp {
    balloons: BallonsQueryData 
}

export interface FilterInput {
    variant?: Variant;
    color?: Color;
}

export interface BallonsQueryVariables {
    filter: FilterInput;
    sort?: SortInput;
    after?: string;
    before?: string;
}

export interface FormValues {
    sort: string;
    color: string;
    variant: string;
}

export interface CartObject{
    id: string;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
}