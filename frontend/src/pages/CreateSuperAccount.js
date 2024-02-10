
import CreateSuperForm from "../components/CreateSuperForm"
import Nav from "../components/Nav"

const CreateSuperAccount = () => {
    return (
        <div className="create-supper-account">
            {/* Navbar */}
            <Nav />
            {/* Create Super Form */}
            <div className="create-super-form-container">
                <CreateSuperForm />
            </div>
        </div>
    )
}

export default CreateSuperAccount
