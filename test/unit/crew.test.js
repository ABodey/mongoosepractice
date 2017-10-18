const { assert } = require('chai');
const Crew = require('../../lib/models/crew');

describe('Crew Model', () => {

    it('good model', ()=>{
        const crew = new Crew({
            name:' Lego Pirates',
            dateFound: new Date(),
            colors: [ 'red', 'white', 'black'],
            pirates: [
                {
                    name: 'Red-beard',
                    role: 'Captain',
                    weapons: ['hook']
                },
                {
                    name: 'Smee',
                    role: 'First Mate',
                    weapons: ['pistol']
                }
            ],
            homeBase: {
                island: 'Skull Island',
                bodyOfWater: 'Black Sea'
            },
            gold: 314159
        });

        assert.equal(crew.validateSync(), undefined);
    });    
       
    it('required fields', () =>{
        const crew = new Crew({});
        const {errors} = crew.validateSync();
        assert.equal(errors['name'].kind, 'required');
        assert.equal(errors['gold'].kind, 'required');
        assert.equal(errors['homeBase.bodyOfWater'].kind, 'required');
    });
    
    it('bodyOfWater must be a color sea', () => {
        const crew = new Crew({
            homeBase: {
                bodyOfWater: 'Not a SEA'
            }
        });
        const { errors } = crew.validateSync();
        assert.equal(errors['homeBase.bodyOfWater'].kind, 'enum');
    });

    it('gold must be non negative', () => {
        const crew = new Crew({ gold: -42});
        const { errors } = crew.validateSync();
        assert.equal(errors['gold'].kind, 'min');
    });
});
