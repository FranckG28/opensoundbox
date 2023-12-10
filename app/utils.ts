export const airtableRecordsToObject = (records: {
    fields: {
        [key: string]: any;
    };
}[]): {
    [key: string]: any;
} => {
    const result: { [key: string]: any } = {};
    records.forEach((record) => {
        result[record.fields.name] = getAirtableConfigRecordValue(record.fields);
    });
    return result;
}

const getAirtableConfigRecordValue = (fields: { [key: string]: any }): string => {

    if (fields.file?.length > 0) {
        return fields.file[0].url;
    }

    return fields.value;

}