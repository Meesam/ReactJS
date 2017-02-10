import React from 'react';
class StaticContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="page-header">
          <h1>Quick Prototype with Bootstrap</h1>
        </div>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut blanditiis molestiae eius velit odio.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nesciunt dolorum aliquid dolore accusamus odio repudiandae explicabo architecto totam aspernatur
          fuga itaque expedita inventore, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt excepturi, fugiat vitae fuga nemo ullam a rerum provident
          quibusdam unde, similique! Assumenda modi, labore facere beatae magnam exercitationem a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum laborum
          dolore quod labore iste, mollitia, ullam id optio doloribus explicabo unde, porro error dolores nemo consectetur soluta vel tempora. Explicabo.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Nam corporis hic sunt modi unde dicta voluptas, aut quia. Asperiores praesentium neque magni aliquid temporibus quasi possimus animi, sed, in
          voluptatem.dignissimos minus sed sint maiores voluptatem.</p>
      </div>
    );
  }
}

export default StaticContainer;