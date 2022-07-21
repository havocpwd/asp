class enumService {
    statusType(){
        const  Status = {
            Draft : 'Draft',
            AllReceived : 'All Received',
            Receiving : 'Receiving',
            Processed : 'Processed',
            Retrieving : 'Retrieving',
            AllRetrieved : 'All Retrieved'
        }
        return Status;
    }

    docType(){
        const  docTypes = {
            Purchased : 'Purchased',
            SaleOrder : 'SaleOrder',
        }
        return docTypes;
    }
}