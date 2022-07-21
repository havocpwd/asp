const db = require('../models')
const Order = db.dbSchema.Order
const OrderDetail = db.dbSchema.OrderDetail


exports.update = (req, res)=>{
    const id = req.body.OrderDetailId
    OrderDetail.findByIdAndUpdate(id, 
        {
            shortDesc: req.body.shortDesc,
            qtyOrdered: req.body.qtyOrdered,
            unitPrice: req.body.sales_price,
        }
    )
    .then((result) => {
        if(!result){
            res.status(404).send({
                message: "Order Detail not found"
            })
        }
        res.send({
            message: "Order Detail was updated"
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || "Some error while updating Order Detail."
        })
    })
}

const findOrderDetail = function(id) {
    return OrderDetail.findById(id).then(doc => {
      return doc;
    });
  };

exports.delete = async (req, res) => {
    const id = req.params.id;
    var detailItem = await findOrderDetail(id);
    var orderId = detailItem.orders._id;
    OrderDetail.deleteOne({_id: id})
    .then((result) => {
        console.log(result);
        Order.updateOne({_id:orderId},{$pull: {orderdetails: id}})
        .then((result) => {
            if(!result){
                res.status(404).send({
                    message: "Post not found"
                })
            }
            res.send({
                message: "Post was Delete"
            })
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message || "Some error while deleting Order Detail."
        })
    })
}