const City = require('../src/Models/City');
let data = {
    id: 0,
    city: "New York City",
    city_ascii: "NYC",
    lat: 1,
    lng: 2,
    iso2: 3,
    iso3: 4,
    capital: "NYC",
    admin_name: "Abakir"
}

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Can create a city object by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});

test('Test Values of City', () => {
    let city = new City(data);
    expect(city.id).toBe(0);
    expect(city.city).toBe("New York City");
    expect(city.city_ascii).toBe("NYC");
    expect(city.lat).toBe(1);
    expect(city.lng).toBe(2);
    expect(city.iso2).toBe(3);
    expect(city.iso3).toBe(4);
    expect(city.capital).toBe("NYC");
    expect(city.admin_name).toBe("Abakir");

});
