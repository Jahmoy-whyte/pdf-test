

import { Document, Page, Text  , Image , View } from '@react-pdf/renderer';
import { largeText , stats, mockColums , mockRows } from './mocks/mocks';
import { styles } from './styles/pdfStyles';
import { StatsCard , Heading , SubHeading ,Table } from './components/Table';


const TestReport = () =>{
  
  
   return (
  <Document>
    <Page size="B4" style={styles.page} >
          <View style={styles.baseContainer}>
    <Heading/>
  </View>
    <View style={styles.statsContainer}>
        <SubHeading  
        leftText='Portfolio Performance January 2024'
        rightText='Figures correct as of 25 January 2024'/>
        <View style={styles.statsInnerContainer}>

          {stats.map((data, index)=>{
            return  index < stats.length - 1  ?<>
            <StatsCard heading={data.heading} text={data.text} smallText={data?.smallText}/> 
            <View style={{display:"flex" , backgroundColor:"black", width:1, height:60 }}></View>
            </> 
            : <StatsCard heading={data.heading} text={data.text} smallText={data?.smallText}/>
          })}
        </View>
 
    </View>
    <View style={styles.baseContainer}>
      <SubHeading leftText='Regional Performance January 2024'  rightText='Figures correct as of 25 January 2024' />
      <Table tableCol={mockColums} tableRow={mockRows} />
    </View>

    <View style={styles.baseContainer}>
        <Text style={[styles.textMediumBold , {paddingVertical:15}]}>Regional commentary</Text>
        <Text style={styles.textRegularSmall}>{largeText}</Text>
      </View>

         <View style={styles.footer} fixed >
          <Text style={styles.footerText}>© Copyright 2024 Cult Wines Ltd | All Rights Reserved | www.wineinvestment.com</Text>
            <Text style={styles.footerText} render={({ pageNumber,  }) =>(
            `Monthly Investment Review & Market Update | Page ${ pageNumber}`
            )} />
         </View>
    </Page>

   
  </Document>
)};

export default TestReport;
