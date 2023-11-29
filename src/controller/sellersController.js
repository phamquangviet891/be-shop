import sellersService from "../service/sellersService.js";
import ordersService from "../service/ordersService.js";
import StatusCodes from "http-status-codes";
import { ConflictError, NotFoundError } from "../common/errors.js";
import reviewsService from "../service/reviewsService.js";
import cartItemsService from "../service/cartItemsService.js";

const CREATE_SUCCESSFULLY = "Created successfully";
const UPDATE_SUCCESSFULLY = "Updated successfully";

export default class SellersController {
  static async createNewSeller(request, response, next) {
    try {
      const sellerData = request.body.data;
      await sellersService.createNewSeller(sellerData);
      return response.status(StatusCodes.CREATED).json({
        message: CREATE_SUCCESSFULLY,
      });
    } catch (e) {
      return next(e);
    }
  }
  static async getSellerByID(request, response, next) {
    try {
      const sellerID = request.params.id;
      const seller = await sellersService.getSellerByID(sellerID);
      response.status(StatusCodes.OK).json({
        data: {
            seller,
        },
      });
    } catch (e) {
      return next(e);
    }
  }

  //gonna handle here later
  static async getPublicSellers(request, response, next) {
    try {
      const limit = request.query.limit;
      const sellers = await sellersService.getSellers(limit);

      const publicDatas = sellers.map((seller) => {
        return {
          id: seller.id,
          email: seller.email,
          name: seller.name,
          avatar: seller.avatar,
        };
      });
      return response.status(StatusCodes.OK).json({
        data: {
          publicDatas,
        },
      });
    } catch (e) {
      next(e);
    }
  }

  static async getProtectedSellerDataByID(request, response, next) {
    try {
      const SellerID = request.params.id;
      const protectedSellerData = await sellersService.getProtectedSellerByID(
        SellerID
      );
      response.status(StatusCodes.OK).json({
        data: {
          protectedSellerData,
        },
      });
    } catch (e) {
      return next(e);
    }
  }

  static async updateSeller(request, response, next) {
    try {
      const SellerID = request.params.id;
      const updatedDatas = request.body.data;
      const protectedSellerData = await sellersService.updateSeller(
        SellerID,
        updatedDatas
      );
      response.status(StatusCodes.OK).json({
        message: UPDATE_SUCCESSFULLY,
      });
    } catch (e) {
      return next(e);
    }
  }



  static async getOrders(request, response, next) {
    try {
      const SellerID = request.params.id;
      const orders = await ordersService.getOrdersByUserID(SellerID);
      return response.status(StatusCodes.OK).json({
        data: orders,
      });
    } catch (e) {
      return next(e);
    }
  }

}
