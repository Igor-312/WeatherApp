// import { useAppSelector } from "store/hooks"
// import { HistoryPageWrapper, HistoryCard, Paragraph } from "./styles"
// import { weatherSelectors } from 'store/redux/weatherSlice'
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

// function History() {
//   const weatherData = useAppSelector(weatherSelectors.weatherStatus)

//   const weather = weatherData.map((user: { id: Key | null | undefined; cityName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => {
//     return (
//     <HistoryCard key={user.id}>
//       <Paragraph>{user.cityName}</Paragraph>
//     </HistoryCard>
//   )
//   })

//   return (
//   <HistoryPageWrapper>
//     {weather}
//   </HistoryPageWrapper>
//   )
// }

// export default History