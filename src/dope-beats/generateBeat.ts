// interface itemObj {
//     slot: keyof typeof dopeSounds;
//     item: keyof typeof dopeSounds.vehicles
//     | keyof typeof dopeSounds.drugs;
// }

const dopeSounds = {
    vehicles: {
        atv: 'https://ipfs.infura.io/ipfs/QmcK1kFmDLiFuE1pjDMfCy6CsmoRiR588veQoQptP7gtiF',
        bassRough: 'https://ipfs.infura.io/ipfs/QmNYyoVRbDwhdjbWXnNjZLJGc9BfGjBLvPi8xp3mhYtqSY',
        c63Amg: 'https://ipfs.infura.io/ipfs/QmRduWEbGx1tsMJL7Ycaez8ajAm1XXUaCHxuWdjemtvoLt',
        camper: 'https://ipfs.infura.io/ipfs/QmRPdPfS8BQkx2qSL8N1CuKGfFaANqPaDDQ3UkMS4fZTsd',
        electricScooter: 'https://ipfs.infura.io/ipfs/QmQ7m8exEe26EcQpSLPMaieqppjs5W3EXJ6q9ikzzorSDf',
        golfCart: 'https://ipfs.infura.io/ipfs/QmQV4xJA5y7WRoernbtgXhKsf3ZzEiBQ7t2Fiy5YdZEuZ1',
        gWagon: 'https://ipfs.infura.io/ipfs/QmPnaWWYUVrA7bpmphDo7HNzQKo99Ckv9zKMDte5L8rkYd',
        lowrider: 'https://ipfs.infura.io/ipfs/QmVh1D8wPZ6p4DQV5hH8FcFyCwuU2C7vgCjcKaNmiPxcEg',
        porsche: 'https://ipfs.infura.io/ipfs/QmcCTgmosvmFEw2dacjkUedAXB7R8igkuWdqDsqPmpwLpY',
        pulsar: 'https://ipfs.infura.io/ipfs/QmdcNNcjdY4j8ByTRYV9ZQaUTaUvZH3wd1YMVvezvHaFuE',
        pushBike: 'https://ipfs.infura.io/ipfs/QmdSu1Bj5JNnDudELmbdXUTryEFKCg786oBCcuEP6i6kL3',
        rollerBlades: 'https://ipfs.infura.io/ipfs/QmS4qnoTRpS4E8LjweMwtCBgh4TDVhnmXfpSYmdjFVSFkg',
        rollsRoyce: 'https://ipfs.infura.io/ipfs/QmWSD85LbsKYkPHEwW2v1uosKT8BfSCiGk5hjEE7WmB38C',
        scooter: 'https://ipfs.infura.io/ipfs/QmeDkxwRfC4zbNWKeLHKNqLwyXhAWwDCD4JVXgqngvFszN',
        tricycle: 'https://ipfs.infura.io/ipfs/QmeDERa4pYZ3Fbocxyh29oCbFyUFVzL2zbB9GgjHE2XkvY'

    },
    drugs: {
        adderall: 'https://ipfs.infura.io/ipfs/QmU2ZkJ18rMNZBajuACALe365UvU74sFrhofZM4YVkT49Y',
        coke: 'https://ipfs.infura.io/ipfs/QmeQAz3QffDSH1iZm8Yjc7WXNhM37L4qbJeuZofAJEHMfS',
        crack: 'https://ipfs.infura.io/ipfs/QmaV7aNAejurygoXujTo1DRyaRTS5zr7hj87Vmf9VcuQet',
        fentanyl: 'https://ipfs.infura.io/ipfs/QmZEggtAF36yAEWZY65RWwuH8ST1JiUdJrMLHwGsBRuqo3',
        heroin: 'https://ipfs.infura.io/ipfs/QmRejwvp4VvP5d59aDT2ADfBcY9QUsjpeAqyMjgXYgu8aN',
        krokodil: 'https://ipfs.infura.io/ipfs/QmSKAFCbjaCh7amJLFzxArxoZbojrj27FdtW7JjbrbU6DT',
        lsd: 'https://ipfs.infura.io/ipfs/QmSJ5pW9ntp6jRwEfziahJKpHmmGrtuUiM4r7yun1xiBw2',
        ludes: 'https://ipfs.infura.io/ipfs/QmTmKqHjViHzTCBKz6vCsvdcmHoSQWbb8BqnW4LJk16SVU',
        molly: 'https://ipfs.infura.io/ipfs/QmV9EPyaHFnJEWWpYsWu6LK7Cx7PLJwii5pLGprrhqpeBQ',
        oxy: 'https://ipfs.infura.io/ipfs/QmVWsn7VaVrZLKCHbLh4nTyaZPKVX2dVYJc5pNUkbFHHKR',
        pcp: 'https://ipfs.infura.io/ipfs/QmUZXMVEdt2KTT2LzHXjEqqK5kNfBe6NwqKaqucrKdWqrm',
        soma: 'https://ipfs.infura.io/ipfs/QmbFrHpiC19YPgxomi7bsfgdaZafuSaasQj86LB5qJSK5f',
        weed: 'https://ipfs.infura.io/ipfs/QmZCnHG3hrtx36UfJ1WAjzGWQn4HznuacD8DFTFf9yzxYr',
        xan: 'https://ipfs.infura.io/ipfs/QmZ6Rhzsgt4yhAyh3pXat8xREKVsv1akQwGNeQesfuxqLA',
        zolof: 'https://ipfs.infura.io/ipfs/QmNgoj8bE4Jgf3Y89Qq9Y7c5c6KLQKsWU5dVpNXrqCftph'
    }
}

function getSoundURLFromItem(item: itemObj) {
    const url = dopeSounds[item.slot]
}

// function generateBeats(bag: Bag) {
//     const vehicleURL = getSoundURLFromItem(bag.vehicle)
//     const drugURL = getSoundURLFromItem(bag.drug)
// }

// export generateBeats;
export default dopeSounds;