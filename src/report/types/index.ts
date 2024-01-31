export interface StatsProps{
    heading:string 
     text:string 
      smallText?:string | null | undefined
}


export interface TableColProps{
  id:string | number
  title:string
  value:string
}

export interface TableRowProps{
  [key:string]:string
}

export interface TableProps <T>{
  tableCol:TableColProps[]
  tableRow?:T[]
}


export interface RowData{
 id: string | number
  region:string
  totalValue:string
  total:string
  MTMMTD:string
  MTD:string
  totalDiff:string
 
}