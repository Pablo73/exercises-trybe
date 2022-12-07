const getCurrentImg = async (name) => {
    const response = await fetch( `https://anapioficeandfire.com/api/characters?name=${name}`);
    const json = await response.json();

    return response.ok ? Promise.resolve(json) : Promise.reject(json);

};

export default getCurrentImg;