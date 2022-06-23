const express = require('express'),
  hasMutation = require('dna-mutation'),
  md5 = require('md5'),
  Mutants = require('../models/Mutants');

const router = express.Router();

const createOrUpdate = async (dna, isMutant) => {
  const checksum = md5(JSON.stringify(dna));
  const data = {
    checksumDna: checksum,
    isMutant,
  };

  await Mutants.updateOne(
    { checksumDna: checksum },
    { $set: data },
    { upsert: true }
  );
}

router.post('/mutant', async (req,res) => {
  const { dna } = req.body;

  if(!Array.isArray(dna)) {
    return res.status(500).send('dna is required! and must be array');
  }

  try {
    const isMutant = hasMutation(dna);
    await createOrUpdate(dna, isMutant);
    
    if(!isMutant) {
      return res.sendStatus(403);
    }

    res.sendStatus(200);
  } catch(err) {
    return res.status(500).send(err.message);
  }
});

router.get('/stats', async (req,res) => {
  let countMutant = await Mutants.count({ isMutant: true }),
    countHuman = await Mutants.count({ isMutant: false });

  countMutant = countMutant || 0;
  countHuman = countHuman || 0;

  res.send({
    'count_mutant_dna': countMutant,
    'count_human_dna': countHuman,
    'ratio': countHuman / countMutant
  })
});

module.exports = router;