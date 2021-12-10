import Link from 'next/link'
import Image from 'next/image'

import southAfrica from 'public/south-africa.png'
import canada from 'public/canada.png'
import germany from 'public/germany.png'
import usa from 'public/usa.png'
import { FooterContainer, CountryBlockLink, Button, CountryName } from './style'

// component fot footer with country buttons

export const Footer = () => {
    return (
        <FooterContainer>
            <Button>
                <Link href='/south africa' passHref>
                    <CountryBlockLink>
                        <Image
                            src={southAfrica}
                            width={50}
                            height={50}
                            quality={100}
                            alt='south africa flag'
                        />
                        <CountryName>South Africa</CountryName>
                    </CountryBlockLink>
                </Link>
            </Button>
            <Button>
                <Link href='/canada' passHref>
                    <CountryBlockLink>
                        <Image
                            src={canada}
                            width={50}
                            height={50}
                            quality={100}
                            alt='canada flag'
                        />
                        <CountryName>Canada</CountryName>
                    </CountryBlockLink>
                </Link>
            </Button>
            <Button>
                <Link href='/' passHref>
                    <CountryBlockLink>
                        <Image
                            src={usa}
                            width={50}
                            height={50}
                            quality={100}
                            alt='usa flag'
                        />
                        <CountryName>USA</CountryName>
                    </CountryBlockLink>
                </Link>
            </Button>
            <Button>
                <Link href='/germany' passHref>
                    <CountryBlockLink>
                        <Image
                            src={germany}
                            width={50}
                            height={50}
                            quality={100}
                            alt='germany flag'
                        />
                        <CountryName>Germany</CountryName>
                    </CountryBlockLink>
                </Link>
            </Button>
        </FooterContainer>
    )
}
