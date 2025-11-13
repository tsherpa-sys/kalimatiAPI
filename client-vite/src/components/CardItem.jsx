import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';

export function CardItem(props) {
    const { details } = props;
    const { image, price, address, beds, baths, size, daysAgo = 23 } = details; // optional daysAgo field

    return (
        <Card sx={{ maxWidth: 345, position: 'relative' }}>
            <CardActionArea>

                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="listing image"
                        overflow="hidden"

                    />

                    {/* Days ago badge */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            px: 1.2,
                            py: 0.5,
                        }}
                    >
                        {daysAgo} days ago
                    </Box>
                </Box>

                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>{beds}</strong> bds | <strong>{baths}</strong> ba | <strong>{size}</strong> | Active
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {address}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
