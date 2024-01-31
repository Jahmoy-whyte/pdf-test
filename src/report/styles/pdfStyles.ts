import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: { 
    display:"flex",
    flexDirection:"column"
  },

  baseContainer:{
     display:"flex",
    paddingHorizontal:20,
    flexDirection:"column"
  },

  headingContainer: { 
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
   headingImg:{
  //  transform:"scale(1.2)",
    width:200,
    objectFit:"contain"
  },
  headingText:{
    fontSize:12,
    fontFamily: 'Times-Roman',
  },

  textMediumBold:{
    fontSize:14,
    fontFamily:'Times-Bold',
  },
   textRegularBold:{
    fontSize:10,
    fontFamily:'Times-Bold',
  },
    textRegular:{
    fontSize:10,
    fontFamily: 'Times-Roman',
  },
      textRegularSmall:{
    fontSize:10,
    fontFamily: 'Times-Roman',
  },
  statsContainer:{
    backgroundColor:"#E8E9EB",
    padding:14,
    height:150,
    marginBottom:15
  },

  statsInnerContainer:{
    flex:1,
     padding:18,
    justifyContent:"space-around",
   display:"flex",
  flexDirection:"row",
  gap:5,

  },

  statsCardContainer:{
  display:"flex",
 padding:5,
  gap:8,
  alignItems:"center"
  },

  statsCardHeading:{
    fontSize:10,
    fontFamily: 'Times-Roman',
  },
    statsCardText:{
    fontSize:18,
    fontFamily: 'Times-Roman',
  },
      statsCardSmallText:{
    fontSize:10,
    fontFamily: 'Times-Roman',
  },

  subHeadings:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
    tableSection: {
      marginTop:15,
    flexGrow: 1,
  },
  table: {
    backgroundColor:"white",
    display:"flex",
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
   tableHead: { display:"flex", flexDirection: 'row' ,backgroundColor:"#E4E4E4"  },
  tableRow: { display:"flex", flexDirection: 'row' },
  cell: {
    padding:5,
    flex:1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  headingCell: {  fontSize: 10 ,  padding:5,   fontFamily:'Times-Bold',},
  cellText: { fontFamily:"Times-Roman" , fontSize: 10 ,  },

   footer: {
    zIndex:-10,
    paddingHorizontal:20,
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  },

  footerText:{
    fontFamily:"Times-Roman" , fontSize: 9 , 
  }
  

  
});