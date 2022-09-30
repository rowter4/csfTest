package vttp2022.assessment.csf.orderbackend.repositories;

// import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import vttp2022.assessment.csf.orderbackend.models.Order;
import vttp2022.assessment.csf.orderbackend.models.OrderSummary;

@Repository
public class OrderRepository {

    public static final String SQL_INSERT_ORDER = "insert into orders(name, email, pizza_size,thick_crust,sauce,toppings,comments) values (?, ?, ?, ?, ?,?,?)";
    public static final String SQL_GET_ORDER = "select * from orders where email = ?";

    @Autowired
    private JdbcTemplate template;

    private int updated;

    public List<OrderSummary> getOrder(String email) {

        List<OrderSummary> orderSummaries = new LinkedList<>();

        SqlRowSet rs = template.queryForRowSet(SQL_GET_ORDER, email);

        while (rs.next()) {
            OrderSummary summary = OrderSummary.create(rs);
            orderSummaries.add(summary);
        }

        return orderSummaries;
    }

    public Integer postOrder(Order order) {

        this.updated = template.update(SQL_INSERT_ORDER,
                order.getName(),
                order.getEmail(),
                order.getSize(),
                order.isThickCrust(),
                order.getSauce(),
                order.getToppings(),
                order.getComments());
        System.out.printf(">>>> updated : %d \n ", updated);

        return updated;

    }

}
