import { Stack, Typography } from "@mui/material";

const IconWithText = (props) => {
    return (
        <Stack direction="row" alignItems="center" gap={1}>
            
            <Typography variant={props.variant}>
                {props.content}
            </Typography>
        </Stack>
    );
}

export default IconWithText;