const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
    });

    (async () => {
        await sequelize.sync({ force: true });
        // As funções vão aqui

        // const sara = User.build({
        //     fullName: 'Sara Silva Santos',
        //     email: 'sara.ss@trybe.com',
        //   });
          
        //   console.log(sara instanceof User); // true
        //   console.log(sara.fullName); // "Sara Silva Santos"

        //   await sara.save();
        //   console.log('Pessoa salva no banco de dados!');

        //   const sara = await User.create({
        //     fullName: 'Sara Silva Santos',
        //     email: 'sara.ss@trybe.com',
        //   });
          
        //   console.log(sara instanceof User); // true
        //   console.log(sara.name); // "Sara Silva Santos"

//=============================================================================================================        

          const sara = await User.create({
            fullName: 'Sara Silva Santos',
            email: 'sara.ss@trybe.com',
          });
          
          console.log(sara.fullName); // "Sara Silva Santos"
          
          sara.fullName = "Jane Doe";
          
          // O nome ainda está "Sara Silva Santos" no banco de dados!
          
          await sara.save();
          
          // Agora o nome foi atualizado para "Jane Doe" no banco de dados!

//=======================================================================================================          

          const lucas = await User.create({
            fullName: 'Lucas Silva Santos',
            email: 'lucas.ss@trybe.com',
          });
          
          lucas.set({
            fullName: "Pedro Silva Santos",
            email: "pedro.ss@trybe.com"
          });
          
          // O nome ainda está "Lucas Silva Santos" no banco de dados!
          
          await lucas.save();
          
          // Agora o nome foi atualizado para "Pedro Silva Santos", e o email para pedro.ss@trybe.com no banco de dados!

//==========================================================================================================          

          const jane = await User.create({
            fullName: "Jane Doe",
            email: "jane.doe@trybe.com",
            });
            
            jane.email = "ada.doe@trybe.com";
            await jane.update({ fullName: "Ada Joe" });
            
            // O banco de dados agora tem "Ada Joe" para o nome, mas o email ainda é "jane.doe@trybe.com".
            
            await jane.save();
            // O banco de dados agora tem "ada.doe@trybe.com" para o email.

//========================================================================================================================            

            const mario = await User.create({ fullName: "Mario Bors" });

            console.log(mario.fullName); // "Mario Bors"

            await mario.destroy();

            // Agora essa entrada não existe mais no banco de dados!

//=========================================================================================================            

            const User = (sequelize, DataTypes) => {
                  const User = sequelize.define('User', {
                    fullName: DataTypes.STRING,
                    email: DataTypes.STRING,
                       // aqui inserimos o datatype da coluna criada
                       phoneNum: DataTypes.STRING,
                  });
                
                  return User;
                };
    })();
  
    return User;

  };
  
  module.exports = UserModel;