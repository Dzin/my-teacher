import { Button } from "@mui/material"
import { Teacher } from "../../@types/teacher";
import { formatter } from "../../services/formatter";
import { Avatar, Container, Description, Empty, Information, Item, Name, Value } from "./styles";

interface ListProps {
    teachers: Teacher[];
    onSelect: (teacher: Teacher) => void
}

const List = ({teachers, onSelect}: ListProps) => {
    
    return (
        <div>
            {
                teachers.length > 0 ? (
                    <Container>
                        {
                            teachers.map(teacher => (
                                <Item key={teacher.id}>
                                    <Avatar src={teacher.avatar} />
                                    <Information>
                                        <Name>{teacher.name}</Name>
                                        <Value>{formatter.monetaryValue(teacher.value_hour)} por hora</Value>
                                        <Description>{formatter.limitText(teacher.description, 200)}</Description>
                                        <Button
                                            sx={{
                                                width: '70%'
                                            }}
                                            onClick={() => onSelect(teacher)}                                       
                                        >
                                            Marcar Aula com {formatter.limitText(teacher.name, 10)}
                                        </Button>
                                    </Information>
                                </Item>       
                            ))
                        }
                    </Container>
                ) : (
                    <Empty>Nenhum item encontrado!</Empty>
                )
            }
        </div>
    );
}

export default List;