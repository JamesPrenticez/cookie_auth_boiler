/**
 * _app.js
 * Next.js uses the App compenent to initialize pages.
 * This app component runs before any page gets ready for users to see
 * This is a perfect place to add your bootstrap css so that it is avaliable for the
 * IMPORTANT - restart the server
 */


const Index = () => {
    return (
        <>
            <h1 className='jumbotron text-center bg-primary square'>Hellow World</h1>
            <p>from next js..</p>
        </>
    )
}

export default Index