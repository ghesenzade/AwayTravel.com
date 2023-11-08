import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// --------------------------------------MUI-------------------------------------------
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

// -----------------------------------------------ICON----------------------------------
import { FaArrowRight } from 'react-icons/fa6';

// ------------------------Images-------------------------------------------
import Nyc from '../../assets/images/countryImages/NYC.webp';
import SanFrancisco from '../../assets/images/countryImages/sanFransisko.webp';
import Chicago from '../../assets/images/countryImages/Chicago_1121NState_Homepage_Desktop.webp';
import London from '../../assets/images/countryImages/london.webp';
import Toronto from '../../assets/images/countryImages/Toronto_Yorkdale_9765_Web_4x3.webp';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// ----------------------------------------------COUNTRIES (fake api)----------------------------------------
const countries = [
  {
    id: 1,
    name: 'NYC: NoHo',
    img: Nyc,
    address: '10 Bond St., New York, NY 10012',
    weekly: 'Mon-Fri',
    weekend: 'Sun',
    hoursForWeekly: '11am–7pm',
    hoursForWeekend: '12pm–6pm',
  },
  {
    id: 2,
    name: 'San Francisco: Hayes Valley',
    img: SanFrancisco,
    address: '369 Hayes St., San Francisco, CA 94102',
    weekly: 'Mon-Sat',
    weekend: 'Sun',
    hoursForWeekly: '11am–6pm',
    hoursForWeekend: '12pm–6pm',
  },
  {
    id: 3,
    name: 'Chicago: Gold Coast',
    img: Chicago,
    address: '1121 N State St., Chicago, IL 60610',
    weekly: 'Mon-Sat',
    weekend: 'Sun',
    hoursForWeekly: '11am–7pm',
    hoursForWeekend: '12pm–6pm',
  },
  {
    id: 4,
    name: 'London: Seven Dials',
    img: London,
    address: '9 Earlham St., London WC2H 9LL',
    weekly: 'Mon-Sat',
    weekend: 'Sun',
    hoursForWeekly: '11am–6pm',
    hoursForWeekend: '12pm–5pm',
  },
  {
    id: 5,
    name: 'Toronto: Yorkdale',
    img: Toronto,
    address:
      'Yorkdale Shopping Centre 3401 Dufferin St. Unit 533, Toronto, ON M6A 2T9',
    weekly: 'Mon-Sat',
    weekend: 'Sun',
    hoursForWeekly: '10am–9pm',
    hoursForWeekend: '11pm–7pm',
  },
];

const defaultCountry = 'NYC: NoHo'; 

const AwayInCountries = () => {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    setSelectedCountry(defaultCountry);
  }, []);


  const { t } = useTranslation();
  return (
    <section className="awayCountries">
      <div className="container">
        <div className="row">
          <div className="awayInfo">

            <Box className='box' sx={{ minWidth: 120 }}>
              <FormControl fullWidth className='formControl'>
                <InputLabel id="demo-simple-select-label">{t("home_sections.country.name")}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCountry}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  {countries.map((country) => (
                    <MenuItem
                      key={country.id}
                      value={country.name}
                    >
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

{/* -------------------------CHANGE COUNTRIES AND ITS INFORMATION FROM COUNTRIES*(FAKE) API--- */}
            {selectedCountry && (
              <div className="awayInfoHead">
                <h2>{selectedCountry}</h2>
                <p className="address">{countries.find((c) => c.name === selectedCountry).address}</p>
                <div className="hours">
                  <p>
                    <b>{t("home_sections.country.days")}</b>{' '}
                    {countries.find((c) => c.name === selectedCountry).hoursForWeekly}
                  </p>
                  <p>
                    <b>{t("home_sections.country.weekend")}</b>{' '}
                    {countries.find((c) => c.name === selectedCountry).hoursForWeekend}
                  </p>
                </div>
                <div className="detail-btn">
                  <Link className="link">
                    <p>{t("home_sections.country.link")}</p>
                    <div className="arrowIcon">
                      <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* ------COUNTRY IMAGE----------- */}
          <div className="countryImg">
            {selectedCountry && (
              <img
                src={countries.find((c) => c.name === selectedCountry).img}
                alt={selectedCountry}
              />
            )}
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default AwayInCountries;
