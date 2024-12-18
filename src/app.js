const  express = require('express');
const  propertyRoutes = require('./router/propertyRoutes');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', propertyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
