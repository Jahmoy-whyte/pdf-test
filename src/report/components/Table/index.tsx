  import { View , Text ,Image } from "@react-pdf/renderer"
  import { styles } from "../../styles/pdfStyles"
  import { logo } from "../../constants/constants"
  import { TableProps , TableRowProps } from "../../types"
 
 
  export const Heading = ()=>(
    <View style={styles.headingContainer}>
      <Image src={logo} style={styles.headingImg} />
      <View>
        <Text style={styles.headingText}>Monthly Investment Review & Market Update</Text>
        <Text style={styles.headingText}>Joe Bloggs Super</Text>
        <Text style={styles.headingText}>January 2024</Text>
      </View>
    </View>
  )


  export  const StatsCard = ({heading , text, smallText}:{heading:string , text:string , smallText?:string | null | undefined})=>(
    <View style={styles.statsCardContainer}>
        <Text style={styles.statsCardHeading}>{heading}</Text>
        <Text style={styles.statsCardText}>{text}</Text>
        {smallText?<Text style={styles.statsCardSmallText}>{smallText}</Text>:null}
    </View>
  )


   export const SubHeading = ({leftText , rightText}:{leftText:string , rightText:string})=>(
      <View style={styles.subHeadings}>
        <Text style={styles.textMediumBold}> {leftText} </Text>
        <Text style={styles.textRegularBold}>{rightText}  </Text>
      </View>
  )


  export const Table = <T,>({tableCol , tableRow}:TableProps<T>)=>(
     <View style={styles.tableSection}>
        <View style={styles.table}>
          <View style={styles.tableHead}>
            {tableCol.map((data)=>(
            <View style={styles.cell} key={data.id}>
              <Text style={styles.headingCell}>{data.title}</Text>
            </View>
            ))}
          </View>
 

        {tableRow?.map((data)=>{
          const row = data as TableRowProps
        return(
          <View style={styles.tableRow} key={row?.id}>
              {tableCol.map((col )=>{
                return (
                <View style={styles.cell}>
                    <Text style={styles.cellText}>{row[col.value]}</Text>
                </View>
                )
              })}
        </View>
        )
      
        })}
          
      </View>
    </View>
          )
