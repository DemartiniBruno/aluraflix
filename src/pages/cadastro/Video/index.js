import { Link } from "react-router-dom"
import Menu from "../../../components/Menu"
import TemplateBase from "../../../template/TemplateBase"

const CadastroVideo = () => {
  return (
    <TemplateBase>
      <h1>Cadastro de Vídeo</h1>

      <Link to='/cadastro/categoria'>
        Amo tu urubu
      </Link>

    </TemplateBase>
  )
}

export default CadastroVideo
