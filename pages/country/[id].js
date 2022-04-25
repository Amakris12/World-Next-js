import {useRouter} from 'next/router'
// import Head from 'next/head'
import styles from './country.module.css'

export default function Country({country}){
    return ( 
        <>
        <div className={styles.Country}>
            <div className={styles.flagcontainer}>
                <img className={styles.flag} src={country.flag} alt="" />
                <h2 className={styles.name}>{country.name}</h2>
                <div className={styles.flex}>
                    <p className={styles.area}>Area <br /><hr />{country.area}</p>
                    <p className={styles.pop}>Population <br /><hr />{country.population}</p>
                </div>
            </div>
            <div className={styles.divDetails}>
                <h4 className={styles.detailshead}>Details</h4>
                <hr />
                <ul className={styles.list}>
                    <p className={styles.pstItem}>Capital: {country.capital}</p>
                    <p className={styles.pstItem}>Region: {country.region}</p>
                    <p className={styles.pstItem}>Subregion: {country.subregion}</p>
                    {/* <p className={styles.pstItem}>{country.currencies}</p> */}
                    <p className={styles.pstItem}>Native Name: {country.nativeName}</p>
                    <p className={styles.pstItem}>Timezones: {country.timezones}</p>
                    {/* <li className={styles.listItem}>Gini: {country.gini}</li> */}
                </ul>
            </div>
        </div>
        </>
    )
}

export const getServerSideProps= async({params})=>{
    const req = await fetch(`https://restcountries.com/v2/alpha/${params.id}`)
    // console.log(req)
    const data = await req.json()
    // console.log(data)
    return {
        props:{
            country:data
        }
    }
}