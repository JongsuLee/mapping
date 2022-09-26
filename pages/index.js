import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Overall from '../components/Overall'
import Specific from '../components/Specific'
import AgriMap from '../components/Agri-Map'

export default function Home() {
  return (
    <AgriMap />
    // <Specific />
  )
}
