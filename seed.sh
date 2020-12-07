# Variable Definitions
# Path to directory bash script is living
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
${console.log('1')}

# Database Variable Definitions
DATABASE="carouselServiceDB"
USER="root"
${console.log('2')}


# Output Filename for Faker File
OUTPUT="placesData.csv"
FILEPATH="$DIR/$OUTPUT"
# if parameter 1 is not passed as argument default records to be generated to 1000000
LINES=${1:-1000000}
${console.log('3')}

### Import Our Database ###
# Dont specify a database since CREATE DATABASE is in schema.sql
SCHEMA="schema.sql"
psql $SCHEMA
${console.log('4')}

### Run Our Generator Script ###
# node database/generator.js --output=$FILEPATH --lines=$LINES

### Import Our placesData.csv file to seed Database ###
psql -d $DATABASE -c "COPY $DATABASE FROM '$FILEPATH' CSV HEADER";