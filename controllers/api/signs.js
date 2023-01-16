const { userSign } = require("../../models");

const router = reuqire('express').Router();


router.get('/', (req, res) => {
    userSign.findAll().then((signData) => {
        res.json(signData);
    });
});

//Zodiac sign, element of that sign, date range of the sign, possibly the personality of the sign

router.post('/', (req, res) => {
    signs.bulkcreate(req.body)
    .then((newSign) => {
        res.json(newSign);
    })
    .catch((err) => {
        res.json(err);
    })
});

signs.bulkcreate([
    {
        sign: 'Aries',
        personality: '',
        dates: 'March 21-April 19',
        element: 'Fire'
    },
    {
        sign: 'Taurus',
        personality: '',
        dates: 'April 20-May 20',
        element: 'Earth'
    },
    {
        sign: 'Gemini',
        personality: '',
        dates: 'May 21-June 20',
        element: 'Air'
    },
    {
        sign: 'Cancer',
        personality: '',
        dates: 'June21-July 22',
        element: 'Water'
    },
    {
        sign: 'Leo',
        personality: '',
        dates: 'July 23-August 22',
        element: 'Fire'
    },
    {
        sign: 'Virgo',
        personality: '',
        dates: 'August 23-September 22',
        element: 'Earth'
    },
    {
        sign: 'Libra',
        personality: '',
        dates: 'September 23-October 22',
        element: 'Air'
    },
    {
        sign: 'Scorpio',
        personality: '',
        dates: 'October 23-November 21',
        element: 'Water'
    },
    {
        sign: 'Sagittaruis',
        personality: '',
        dates: 'November 22-December 21',
        element: 'Fire'
    },
    {
        sign: 'Capricornus',
        personality: '',
        dates: 'December 22-January 19',
        element: 'Earth'
    },
    {
        sign: 'Aquarius',
        personality: '',
        dates: 'January 20-February 18',
        element: 'Air'
    },
    {
        sign: 'Pisces',
        personality: '',
        dates: 'February 19-March 20',
        element: 'Water'
    }
]);


module.exports = router;