class ItemsController < ApplicationController
	respond_to :json
	
	def index
		sql = "SELECT * FROM items"
		sql += " WHERE title = 'fin'" #POUR LA BARRE DE RECHERCHE

		# DEBUT PARTIE DE TRI
		sql += " ORDER BY"
		safe_params = Hash.new
		def extract_params(params, key)
			if params.has_key?(key) && (params[key] == "ASC" || params[key] == "DESC")
				params[key]
			else
				"ASC"
			end
		end
		safe_params["updated_at"] = extract_params params, :update_at
		safe_params["created_at"] = extract_params params, :update_at
		safe_params["title"] = extract_params params, :title
		safe_params["vues"] = extract_params params, :vues
		sql += safe_params.map{|k,v| " #{k} #{v}"}.join(',')
		# FIN PARTIE DE TRI
		
		respond_with Item.connection.select_all(sql)
	end
	
	# def show
	# 	respond_with Item.find(params[:id])
	# end
	
	# def create
	# 	respond_with Item.create(params[:item])
	# end
	
	# def update
	# 	respond_with Item.update(params[:id], params[:item])
	# end
	
	# def destroy
	# 	respond_with Item.destroy(params[:id])
	# end

end