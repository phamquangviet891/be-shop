import { PrismaClient } from "@prisma/client";
import { BuyerDAO } from "../model/private/DAO/buyerDAO";
import { SellerDAO } from "../model/private/DAO/sellerDAO";
import { AdminDAO } from "../model/private/DAO/adminDAO";
//public
async function getCredential(email, password) {
  try {
    const DBconnection = new PrismaClient();
    const [user] = await DBconnection.$transaction([DBconnection.$queryRaw`SELECT "id","email", "password" from  ADMIN Union SELECT id,email, password from  BUYER Union SELECT id,email, password from  SELLER `]);
    if(user)
    {
      
    }
  } catch (e) {
    throw e;
  }
}
function removeCredentialByUserID(userID) {}
function generateNewAccessToken(userID) {}

//private
function storeAccessTokenToCache(userID, accessToken) {}
function storeRefreshTokenToCache(userID, refreshToken) {}

module.exports = {
  getCredential,
  removeCredentialByUserID,
  generateNewAccessToken,
};
