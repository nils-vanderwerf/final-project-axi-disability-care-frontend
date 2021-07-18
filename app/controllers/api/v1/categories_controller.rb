class Api::V1::CategoriesController < ApplicationController
    def show
        category = Category.find(params[:id])
        render :show
     end
    
      def index
        @category = Category.all

        render json: @category
      end
    
      private
    
      def category_params
        params.require(:category).permit(
          :name
        )
      end
end
