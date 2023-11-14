import { Blockquote } from "@mantine/core"
import { IconInfoCircle } from '@tabler/icons-react';

function QuoteCard(){
    let icon = <IconInfoCircle />;
    return(
        <Blockquote color="blue" cite="– Kanzu Code" icon={icon} mt="xl">
            Life is like an npm install – you never know what you are going to get.
        </Blockquote>
    )
}

export default QuoteCard;